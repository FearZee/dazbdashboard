import "./User.css"

function User({name, bereich, avatar}){
    return (
        <div className={'user-container'}>
            <img src={avatar} alt="avatar"/>
            <div className={'info-container'}>
                <h1 className={'name'}>{name}</h1>
                <l className={'role'}>{bereich}</l>
            </div>

        </div>
    )
}

export default User