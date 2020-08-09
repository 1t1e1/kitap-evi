import styled from 'styled-components';
import { NavbarText } from 'reactstrap';

const StyledNavbarText = styled(NavbarText)`
  margin-left: 14px;
  color: ${(props) => (props.active ? '#ff8241' : '#3498db')};
  cursor: pointer;
`;

export default StyledNavbarText;
