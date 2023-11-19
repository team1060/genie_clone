import Dropdown from 'react-bootstrap/Dropdown';

function DropDown() {
  return (
    <Dropdown className='text-end'>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        로그인/회원가입
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Genie 로그인</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-2">아이디 찾기</Dropdown.Item>
        <Dropdown.Item href="#/action-3">비밀번호 찾기</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">회원가입</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;