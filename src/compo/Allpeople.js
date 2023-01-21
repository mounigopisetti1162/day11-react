import { useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {Container,Row,Col} from 'reactstrap'
import CardComponent from './Card'
import Context from './Context'
import { Button,Space } from 'antd';


export default function Allpeople()
{
  
    const context=useContext(Context)
    const navigate=useNavigate()
    useEffect(()=>{
      context.getpeople()

    },[])



    return(
        <>
      <Space direction="vertical" style={{ width: '100%' }} >
       <Button type="primary" danger onClick={()=>navigate('/action')} block>CREATE
       </Button>
       </Space>
       <br/>
       <br/>

        <Container className="allpeople">
       <Row xs="3">
            {context.people.map((data,index)=>{
                return(
                    <Col key={data.id}>
                  <CardComponent
                   
                    data={data}
                    key={data.id}
                  />
                </Col>
                )
            })}
          </Row>
            </Container>     
            </>
    )
}
