import Footer from './Footer';
import { shallow } from 'enzyme';

describe('test Footer component', () => {
  const wrapper = shallow(<Footer />);

  it('Footer renders without crashing', () => {
    shallow(<Footer />);
  });

  it('Footer renders 2 input', () => {
    expect(wrapper.text()).to.contain('Copyright');
  });
});