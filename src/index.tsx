import * as React from 'rax';
import Demo from './Demo';
import * as DriverDOM from 'driver-dom';
export function init(box:HTMLElement){
    React.render(
        <div>
            <Demo data={{name:"jian"}}/>
        </div>
    ,box,{ driver: DriverDOM })
 }

init(document.body);