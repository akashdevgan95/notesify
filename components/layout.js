import { Container, Header } from 'semantic-ui-react'

const Layout = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Layout;