

export let Status = () => {
    let statusarr = [
        {
            status:"Unresolved",
            number:60
        },
        {
            status:"Overdue",
            number:16
        },
        {
            status:"Open",
            number:43
        },
        {
            status:"On hold",
            number:64
        },
    ]
    return (
        <div className="status">
            <ul className="status__list">
                {
                    statusarr.map((statusitem) => (
                        <li className="status__item">
                            <p className="status__text"> {statusitem.status}</p>
                            <p className="status__number"> {statusitem.number}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

} 