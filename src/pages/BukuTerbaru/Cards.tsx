import react, { useState } from "react";
import Modal from "./Modals";
type bookProps = {
    book: any;
};


const Card: React.FunctionComponent<bookProps> = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    console.log(book)
    return (
        <>
            {
                book.map((item: any) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if (thumbnail != undefined && amount != undefined)
                        return (
                            <>
                                <div className="card" onClick={() => { setShow(true); setItem(item) }}>
                                    <img src={thumbnail} alt="" />
                                    <div className="bottom">
                                        <h3 className="title">{item.volumeInfo.title}</h3>
                                        <p className="amount">Rp. {amount}</p>
                                    </div>
                                </div>
                                <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
                            </>
                        )
                }
                )
            }

        </>
    )
}
export default Card;