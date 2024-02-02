function Subtitle({styleClass, children}:{styleClass:any,children:any}){
    return(
        <div className={`text-xl font-semibold ${styleClass}`}>{children}</div>
    )
}

export default Subtitle