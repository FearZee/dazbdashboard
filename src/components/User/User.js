import "./User.css"

function User({name, bereich, avatar}){
    return (
        <div className={'user-container'}>
            <img className={'avatar'} src={avatar} alt="avatar"/>
            <h1 className={'name'}>{name}</h1>
            <l className={'fachbereich'}>{bereich}</l>
        </div>
    )
}

export default User