import React from 'react';
import './page.css';
const NewsPage = () => {
    return (
        <div className='news_wrapper'>
            <div className="news">
                <div className="heading">
                    <h2>Bobby in the news</h2>
                </div>
                <div className="news_container">
                    <div className="card">
                    <div className="video">
                        <video src="./videos/news1.mp4" autoPlay="" loop="" muted="" />
                    </div>
                    <div className="content">
                        <span className="date">11.20.2023</span>
                        <div className="title_post">POP UP MINT!!</div>
                        {/* <Link href=""><span>Read more <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z"></path> </g></svg></span></Link> */}
                    </div>
                    </div>
                    {/* <div className="card">
                    <div className="img">
                        <img src="./images/news2.webp" alt="500 Plots Of Land" />
                    </div>
                    <div className="content">
                        <span className="date">11.20.2023</span>
                        <div className="title_post">500 Plots Of Land On December 04, 2023</div>
                        <Link href=""><span>Read more <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z"></path> </g></svg></span></Link>
                    </div>
                    </div> */}
                    <div className="card">
                    <div className="img">
                        <img src="./images/news3.webp" alt="Bobby Coming to Vietnam" />
                    </div>
                    <div className="content">
                        <span className="date">11.20.2023</span>
                        <div className="title_post">Bobby Coming to Vietnam !!</div>
                        {/* <Link href=""><span>Read more <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z"></path> </g></svg></span></Link> */}
                    </div>
                    </div>
                    <div className="card">
                    <div className="img">
                        <img src="./images/news4.webp" alt="The 000 Unique Bobby&apos;s" />
                    </div>
                    <div className="content">
                        <span className="date">Coming soon</span>
                        <div className="title_post">The 10,000 Unique Bobby&apos;s</div>
                        {/* <Link href=""><span>Read more <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z"></path> </g></svg></span></Link> */}
                    </div>
                    </div>
                    {/* <div class="card">
                            <div class="img">
                                <img src="./images/news2.jpg" alt="">
                            </div>
                            <div class="content">
                                <span class="date">11.20.2023</span>
                                <div class="title_post">500 Plots Of Land On December 04, 2023</div>
                                <Link href=""><span>Read more <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z"></path> </g></svg></span></Link>
                            </div>
                        </div> */}
                    {/* <div class="card">
                            <div class="img">
                                <img src="./images/news3.jpg" alt="">
                            </div>
                            <div class="content">
                                <span class="date">11.20.2023</span>
                                <div class="title_post">Bobby Coming to Vietnam !!</div>
                                <Link href=""><span>Read more <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z"></path> </g></svg></span></Link>
                            </div>
                        </div> */}
                </div>
                {/* <div class="btn_seemorenews">
                        <a href="javascript:void(0)" class="btn_seemore">
                            <span>See more news</span>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z"></path> </g></svg>
                        </a>
                    </div> */}
            </div>
        </div>

    );
};

export default NewsPage;