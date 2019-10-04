import React, {Component} from 'react';
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
import * as stores from '../data/storeData';

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBXQHkxBZodNnNEZElIo2_glAhPv8BPZKE",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `600px`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{lat: props.currentLocation.lat, lng: props.currentLocation.lng}}
    >
        <Marker
            position={{lat: props.currentLocation.lat, lng: props.currentLocation.lng}}
            onClick={() => {
                props.showInfo();
            }}
        />

        {stores.data.map(store => (
            <Marker
                key={store.id}
                position={{
                    lat: store.lat,
                    lng: store.lng,
                }}
                onClick={() => {
                    props.setSelectedStore(store);
                }}
                icon={{url: "http://maps.google.com/mapfiles/ms/icons/blue.png"}}
            />
        ))}

        {props.storeTouched && (
            <InfoWindow
                onCloseClick={() => {
                    props.noSelected();
                }}
                position={{
                    lat: props.selectedStore.lat,
                    lng: props.selectedStore.lng
                }}>
                <div>
                    <h3>{props.selectedStore.name}</h3>
                    <h4>Address: {props.selectedStore.formattedAddress}</h4>
                    <h4>
                        {props.selectedStore.email ? "Email: " : ""}
                        {props.selectedStore.email ? props.selectedStore.email : ""}
                    </h4>
                    <h4>
                        {props.selectedStore.website ? "Webiste: " : ""}
                        {props.selectedStore.website ?
                            <a href={props.selectedStore.website} target="_blank">{props.selectedStore.website}
                            </a> : ""}
                    </h4>
                </div>
            </InfoWindow>
        )}

        {props.locationTouched && (
            <InfoWindow
                onCloseClick={() => {
                    props.showInfo();
                }}
                position={{
                    lat: props.currentLocation.lat,
                    lng: props.currentLocation.lng
                }}>
                <div>
                    <h4>Your Location</h4>
                </div>
            </InfoWindow>
        )}

    </GoogleMap>
)

class Locator extends Component {
    constructor() {
        super();
        this.state = {
            currentLatLng: {
                lat: 0,
                lng: 0
            },
            userLocationTouched: false,
            selectedStore: {
                lat: 0,
                lng: 0,
                name: "",
                formattedAddress: "",
                email: "",
                website: ""
            },
            selectedStoreTouched: false
        }
        //this.getGeoLocation();
    }

    getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.setState(prevState => ({
                        currentLatLng: {
                            ...prevState.currentLatLng,
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    }))
                }
            )
        } else {
            console.log("error")
        }
    }

    componentWillMount() {
        // this.getGeoLocation()
    }

    showInfo() {
        this.setState({userLocationTouched: !this.state.userLocationTouched})
    }

    setSelectedStore(store) {
        this.setState(prevState => ({
            selectedStore: {
                ...prevState.selectedStore,
                lat: store.lat,
                lng: store.lng,
                name: store.name,
                formattedAddress: store.formattedAddress,
                email: store.email,
                website: store.website
            }
        }))
        this.setState({selectedStoreTouched: true})
    }

    noSelected() {
        this.setState(prevState => ({
            selectedStore: {
                ...prevState.selectedStore,
                lat: 0,
                lng: 0,
                name: "",
                address: ""
            }
        }))
        this.setState({selectedStoreTouched: false})
    }

    render() {
        //TODO: Find a better way to set the users lat lng before first render
        if (this.state.currentLatLng.lat === 0) {
            this.getGeoLocation()
            return (
                <div>
                    <h1>Locator</h1>
                </div>
            )
        }
        return (
            <div>
                <h1>Locator</h1>
                <MyMapComponent
                    locationTouched={this.state.userLocationTouched}
                    showInfo={this.showInfo.bind(this)}
                    currentLocation={this.state.currentLatLng}
                    setSelectedStore={this.setSelectedStore.bind(this)}
                    selectedStore={this.state.selectedStore}
                    storeTouched={this.state.selectedStoreTouched}
                    noSelected={this.noSelected.bind(this)}
                />
            </div>
        )
    }
}

export default Locator;
