function Footer(){
    return(
        <footer>
            <p>&copy;{
                new Date().getFullYear() //this is JS code in {...} only inside return or else don't need
                } 
                _Copyright hau</p>
        </footer>
    );
}

export default Footer