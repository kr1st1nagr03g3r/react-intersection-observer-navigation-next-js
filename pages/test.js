const Hamburger = {
    backgroundColor: "#FFFF00",
}

const notAHamburger = {
    backgroundColor: "#689F38"
}

console.log(Hamburger)

const ScrollDepth = () => {
    offsetHeight > 300 ? { Hamburger } : { notAHamburger }
}



const Scroll = () => {
    const handleScroll = event => {
        console.log('scrollTop: ', event.currentTarget.scrollTop);
        console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    };




    return (
        <div
            className={ScrollDepth}
            style={{
                border: '3px solid black',
                width: '400px',
                height: '500px',
                overflow: 'scroll',
            }}
            onScroll={handleScroll}
        >
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
        </div>
    );
};

export default Scroll;