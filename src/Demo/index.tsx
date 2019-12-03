import * as React from 'rax';

import styles from './index.less';

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
        return(<div style={styles.bg}><div style={styles.box}/>{this.props.data.name}</div>);
    }
}