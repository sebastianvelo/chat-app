export interface MessagesProps {

}

const Messages: React.FC<MessagesProps> = (props: MessagesProps) => {
    return (
        <>
            <div className='col-span-10 col-start-3 mb-6'></div>
            <div className='col-span-10 col-start-3'>
                <div>
                    <p className='font-bold'>Pepe 😎😎 dice:</p>
                    <p>Holaaaa</p>
                    <p>Tengo esquizofrenia</p>
                </div>
                <div>
                    <p className='font-bold'>Pepe 😎😎 dice:</p>
                    <p>Holaaaa</p>
                    <p>Tengo esquizofrenia</p>
                </div>
                <div>
                    <p className='font-bold'>Pepe 😎😎 dice:</p>
                    <p>Holaaaa</p>
                    <p>Tengo esquizofrenia</p>
                </div>
                <div>
                    <p className='font-bold'>Pepe 😎😎 dice:</p>
                    <p>Holaaaa</p>
                    <p>Tengo esquizofrenia</p>
                </div>
            </div>
            <div className='col-span-10 col-start-3 mb-10'></div>
        </>
    );
}

export default Messages;