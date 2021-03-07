import React from 'react';
import { Link } from 'react-router-dom';
import {ContextMenuTrigger, MenuItem, ContextMenu} from 'react-contextmenu';



export default class ChannelListItem extends React.Component{

    constructor(props){
        super(props);
    }

    handleNavClick(id){
        return e => {
            this.props.setCurrentChannel(id);
        }
    }

    handleContextClick(modalName){
        return e => {
            this.props.channelClick(this.props.channel.id)
            switch(modalName){
                case "channel":
                    this.props.openSettingsModal(modalName);
                    break;
                case "deleteChannel":
                    this.props.openModal(modalName);
                    break;
                
            }

        }
    }


    render(){

        let component;
        if(this.props.isOwner){
            component =  
                <div>
                    <ContextMenuTrigger id={`channel-nav-context-menu-${this.props.channel.id}`}>
                        <li onClick={this.handleNavClick(this.props.channel.id)} 
                            className={`channel-list-item-li ${this.props.isNavClicked ? "nav-clicked" : null}`}>
                                                                                     
                            <Link to={`/server/${this.props.server.id}/channel/${this.props.channel.id}`}
                                onClick={this.handleNavClick(this.props.channel.id)} 
                                className={this.props.isCurrentChannel ? "channel-list-item current-channel" : "channel-list-item"}>
                                    <svg className="hashtag-symbol"  viewBox="0 -21 469.33333 469" width="20pt" xmlns="http://www.w3.org/2000/svg"><path d="m282.667969 426.855469c-1.386719 0-2.796875-.171875-4.183594-.554688-8.53125-2.285156-13.566406-11.09375-11.261719-19.605469l106.664063-394.667968c2.304687-8.554688 11.09375-13.675782 19.628906-11.265625 8.53125 2.285156 13.566406 11.09375 11.261719 19.605469l-106.664063 394.667968c-1.921875 7.125-8.386719 11.820313-15.445312 11.820313zm0 0"/><path d="m80 426.855469c-1.386719 0-2.792969-.171875-4.179688-.554688-8.535156-2.285156-13.570312-11.09375-11.265624-19.605469l106.667968-394.667968c2.300782-8.554688 11.113282-13.675782 19.625-11.265625 8.535156 2.285156 13.566406 11.09375 11.265625 19.605469l-106.667969 394.667968c-1.921874 7.125-8.382812 11.820313-15.445312 11.820313zm0 0"/><path d="m410.667969 320.1875h-394.667969c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h394.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m453.332031 138.855469h-394.664062c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h394.664062c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
                                    <div>{this.props.channel.name}</div>
                            </Link>

                        </li>

                    </ContextMenuTrigger>

                    <ContextMenu id={`channel-nav-context-menu-${this.props.channel.id}`}>
                    
                        
                        <MenuItem onClick={this.handleContextClick("channel")}>
                            <div>Edit Channel</div>
                        </MenuItem>
                    
                     
                        <MenuItem className="delete-channel-menu-item" onClick={this.handleContextClick("deleteChannel")}>
                            <div >Delete Channel</div>
                        </MenuItem>
                    
                    </ContextMenu>
                </div>
    
        }else{
            component = 
            <div>
                <li onClick={this.handleNavClick(this.props.channel.id)} 
                    className={`channel-list-item-li ${this.props.isNavClicked ? "nav-clicked" : null}`}>
                    <Link to={`/server/${this.props.server.id}/channel/${this.props.channel.id}`}
                                onClick={this.handleNavClick(this.props.channel.id)} 
                                className={this.props.isCurrentChannel ? "channel-list-item current-channel" : "channel-list-item"}>
                        <i className="fas fa-hashtag hashtag-symbol"></i>  
                        <div>{this.props.channel.name}</div>
                    </Link>
                </li>
            </div>
        }
        return component;
    }
}