import { render } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import {StaticRouter} from "react-router-dom/server";
test("Logo should load on rendering header", () =>{

    //Load Header
    //This test code will run in a JS dom and not the browser
    //Check if logo is loaded.

    const header = render(
       <StaticRouter>
         <Provider store={store}>
            <Header/>
        </Provider>
       </StaticRouter>
    );



    // console.log(header);

    const logo = header.getAllByTestId("logo");

    // console.log(logo);

    expect(logo[0].src).toBe("http://localhost/dummy.png");


});