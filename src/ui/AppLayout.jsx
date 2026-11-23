import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
import styled from "styled-components"

function AppLayout() {
    const StledApplayout = styled.div`
        display: grid;
        grid-template-columns:26rem 1fr;
        grid-template-rows: auto 1fr;
        height: 100vh;
    `
    const Main = styled.main`
        background-color:  var(--color-grey-50);
        padding: 4rem 4.8rem 6.4rem;
    `
  return (
    <StledApplayout>
        <Header />
        <Sidebar />
        <Main>
            <Outlet />
        </Main>
    </StledApplayout>
  )
}

export default AppLayout
