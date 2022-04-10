import React, { Component } from 'react';
export class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state={error:false}
    }

    static getDerivedStateFromError(){
        return {error:true}
    }

    componentDidCatch(){
        this.setState({
            error:true
        })
    }

    render(){
        if(this.state.error){
            return 'Something went wrong!'
        }
        return this.props.children
    }
}