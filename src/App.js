import React from "react";
import Info from "./components/info";
import Weather from "./components/weather";
import Form from "./components/form"; 

const API_KEY = "8e03a3f353a7b05ea7ec75ea06c7b98c";


class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure:undefined,
        humidity:undefined,

        error: undefined

    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
       

        if(city ){
            const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();
            console.log(data);

           


           

        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            pressure:data.main.pressure,
            humidity:data.main.humidity,
            error: undefined
        });
       }  else{
           this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            pressure:undefined,
            humidity:undefined,
    
            error: "Введите название города"

           })
       }
    }

    render(){
        return(
            <div className= "wrapper">
                <div className="main">
             <div className="container">
                 <div className="row">
                    <div className="col-sm-5 info">
                         <Info/>
                    </div>
                    <div className="col-sm-7 form" >
                    <Form weatherMethod={this.gettingWeather} />
                     <Weather 
                     temp={this.state.temp}
                     city={this.state.city}
                     country={this.state.country}
                      sunrise={this.state.sunrise}
                      pressure={this.state.pressure}
                      humidity={this.state.humidity}
                      error={this.state.error}
                /> 
                    </div>
                    </div>
                 </div>
             </div>
               
               
            </div>
        );
    }
}



export default App;
