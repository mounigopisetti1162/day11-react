import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Col, Divider, Row } from 'antd';
import { Container} from 'reactstrap'
import { CopyOutlined } from '@ant-design/icons';

import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>;
export default function Login()
{
    const [Logform,setform]=useState({user:"",password:""})
    
    const navigate=useNavigate()
    const handle=(e)=>{
        setform({...Logform,[e.target.name]:e.target.value})
        console.log(e)
    }
    const submit=()=>{
    
    if(Logform.user==='admin'&& Logform.password==='123')
    {
        console.log("hello")
        localStorage.setItem('islogged','true')
        navigate("/people")
    }
}

    return(
        <>
        username:admin
        <br/>
        password:123
        <Container className="Container">
        <Row justify="center" align="middle">
      <Col span={12} >
      
      <Form
      className="form"
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
<DemoBox value={4000}>
<Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
        <Input size="large" type="text" name="user" onChange={handle} />
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password size="large" type="password" name="password" onChange={handle} />
    </Form.Item>
    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button  type='primary' onClick={submit}>
        Submit
      </Button>
    </Form.Item>

</DemoBox>
</Form>
</Col>
</Row>

        </Container>
        </>
    )
}