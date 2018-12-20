import React, {Component} from 'react'

export default class SingleTrackPage extends Component{
    constructor(p){
        super(p);
        this.state = {
            trackUrl:"",
            info:{}
        }
    }
    render(){
        return(
            <div className="row center">
                <div className="card">
                    {/*Faire un header */}
                    <div className="cardContent">
                        <div className="row">
                            <div class="input-field col s11">
                                    <input id="Url" type="url" class="validate"/>
                                    <label for="Url">Url</label>
                            </div>

                            <div class="input-field col s1">
                                {/* TODO hookup le on click */}
                                <a class="btn btn-floating deep-orange accent-2 white-text" id="btnUrl"><i class="material-icons">audiotrack</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}