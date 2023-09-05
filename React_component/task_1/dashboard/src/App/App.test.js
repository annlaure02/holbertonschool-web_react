import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import App from './App';
import CourseList from '../CourseList/CourseList'
import { shallow } from 'enzyme';

describe('test App', () => {
  it('App renders without crashing', () => {
    shallow(<App />);
  });

  it('App contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(<Notifications />)).to.equal(true);
  });

  it('App contain the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(<Header />)).to.equal(true);
  });

  it('App contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(<Login />)).to.equal(true);
  });

  it('App contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(<Footer />)).to.equal(true);
  });

  it('App check that CourseList is not displayed', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.contains(<CourseList />)).toBe(false);
  });

  it('App verify that the Login component is not included and verify that the CourseList component is included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.contains(<Login />)).toBe(false);
    expect(wrapper.contains(<CourseList />)).toBe(true);
  });

  it('logOut when the keys control and h are pressed', () => {
    const logOut = jest.fn(() => undefined);
    const wrapper = shallow(<App logOut={logOut} />);
    const alert = jest.spyOn(global, 'alert');
    expect(alert).toHaveBeenCalled();
    expect(logOut).toHaveBeenCalledWith('Logging you out');

    jest.restoreAllMocks();
  });
});
