import App from './App';
import { shallow } from 'enzyme';

describe('test App', () => {
  it('App renders without crashing', () => {
    shallow(<App />);
  });

  it('App renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<div className="App-header"></div>)).to.equal(true);
  })

  it('App renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<div className="App-body"></div>)).to.equal(true);
  })

  it('App renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<div className="App-footer"></div>)).to.equal(true);
  })
});
