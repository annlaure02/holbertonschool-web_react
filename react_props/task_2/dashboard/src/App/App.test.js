import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import App from './App';
import { shallow } from 'enzyme';

describe('test App', () => {
  const wrapper = shallow(<App />);

  it('App renders without crashing', () => {
    shallow(<App />);
  });

  it('App contain the Notifications component', () => {
    expect(wrapper.exists(<Notifications />)).to.equal(true);
  });

  it('App contain the Header component', () => {
    expect(wrapper.exists(<Header />)).to.equal(true);
  });

  it('App contain the Login component', () => {
    expect(wrapper.exists(<Login />)).to.equal(true);
  });

  it('App contain the Footer component', () => {
    expect(wrapper.exists(<Footer />)).to.equal(true);
  });
});
