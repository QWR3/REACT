import './Buttons.css';

export default function Buttons({page, pagePrevious, pageNext}) {
    return (
        <div className={'btnFather'}>
            <div className={'buttons'}>
                {page !== 1 && <button onClick={() => {
                    pagePrevious();

                }}>previous</button>}
                {page !== 34 && <button onClick={() => {
                    pageNext()

                }}>next</button>}
            </div>
            <div className={'page'}>
                <h2>page {page}</h2>
            </div>
        </div>

    );
}