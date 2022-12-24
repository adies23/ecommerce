import React from 'react'
import { Container, Nav, Row, Tab, Col } from 'react-bootstrap'
import DashboardProducts from '../components/DashboardProducts'
import OrderAdminPage from '../components/OrderAdminPage'
import ClientAdminPage from './ClientAdminPage'

function AdminDashboard() {
  return (
    <Container>
        <Tab.Container defaultActiveKey="products">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="products">Products</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="orders">Orders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="clients">clients</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="products">
                            <DashboardProducts />
                        </Tab.Pane>
                        <Tab.Pane eventKey="orders">
                            <OrderAdminPage />
                        </Tab.Pane>
                        <Tab.Pane eventKey="clients">
                            <ClientAdminPage />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </Container>
  )
}

export default AdminDashboard