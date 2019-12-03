import * as React from 'rax';

import './index.less';

interface DemoPropsInfo{
    data:{
        name:string
    }
}
interface StateInfo{

}
export default class Demo extends React.Component<DemoPropsInfo,StateInfo>{
    
    constructor(props:any){
        super(props);
    }

    componentWillUnmount(){

    }

    componentDidMount(){

    }


    render(){
        return(<div className={"bg"}><div className={"box"}/>{this.props.data.name}</div>);
    }
}