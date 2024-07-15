// This is to ensure that the menu structure is retained through ou the app.

export default function Tabs({buttons, ButtonsContainer="menu", children}){
    return (
        <>
            {/* This is dynamically setting the elements type */}
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    )
}