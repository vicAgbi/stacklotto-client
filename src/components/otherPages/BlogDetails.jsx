import React from 'react';
import { Link } from 'react-router-dom'
import InnerBanner from '../common/InnerBanner'

const BlogDetails = () => (
    <div>
        <InnerBanner
            pageName="Blog"
        />

        <section className="blog-details-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-details-wrapper">
                            <div className="blog-details-thumb">
                                <img src="/assets/images/b-1.png" alt="blog-single" />
                            </div>
                            <div className="blog-details-content">
                                <div className="single-post-meta">
                                    <a className="meta-author" href="#0"><i className="fa fa-user"></i>Clinton Gonzales</a>
                                    <a className="meta-react" href="#0"><i className="fa fa-heart"></i>12</a>
                                    <a className="meta-comments" href="#0"><i className="fa fa-comment"></i>2</a>
                                    <a className="meta-date" href="#0"><i className="fa fa-calendar"></i>21/02/2019</a>
                                </div>

                                <p>Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Him rendered may attended concerns jennings reserved now. Sympathize did now preference unpleasing mrs few. Mrs for hour game room want are fond dare. For detract charmed add talking age. Shy resolution instrument unreserved man few. She did open find pain some out. If we landlord stanhill mr whatever pleasure supplied concerns so. cordially september newspaper an.</p>
                                <p>Acceptance middletons am it favourable.It it oh happen lovers afraid. Subjects to ecstatic children he. Could ye leave up as built match. Dejection agreeable attention set suspected led offending. Admitting an performed supposing by. Garden agreed matter are should formed temper had. Full held gay now roof whom such next was. Ham pretty our people moment put excuse narrow. Spite mirth money six above get going great own. Started now shortly had for assured hearing expense. Led juvenile his laughing speedily put pleasant relation offering.</p>
                                <p>She who arrival end how fertile enabled. Brother she add yet see minuter natural smiling article painted. Themselves at dispatched interested insensible am be prosperous reasonably it. In either so spring wished. Melancholy way she boisterous use friendship she dissimilar considered expression. Sex quick arose mrs lived. Mr things do plenty others an vanity myself waited to.</p>
                                <p>Any delicate you how kindness horrible outlived servants. You high bed wish help call draw side. Girl quit if case mr sing as no have. At none neat am do over will. Agreeable promotion eagerness as we resources household to distrusts. Polite do object at passed it is. Small for ask shade water manor think men begin. Real he me fond show gave shot plan.</p>
                            </div>
                            <div className="footer d-flex justify-content-between align-items-center">
                                <ul className="post-tags">
                                    <li>tag:</li>
                                    <li><a href="#0">Lotto</a></li>
                                    <li><a href="#0">Tips</a></li>
                                    <li><a href="#0">Jackpots</a></li>
                                </ul>
                                <ul className="post-share">
                                    <li><a href="#0"><i className="fab fa-facebook-f" ></i></a></li>
                                    <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#0"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="comment-area">
                            <h3 className="block-title">3 Comment</h3>
                            <ul className="comment-list">
                                <li>
                                    <div className="single-comment-wrap">
                                        <div className="content">
                                            <h6 className="name">David Jacson</h6>
                                            <span className="reply-time">November 20, 2018 at 8:31 pm</span>
                                            <a href="/#" className="reply">reply</a>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="has-children">
                                    <ul>
                                        <li>
                                            <div className="single-comment-wrap">
                                                <div className="content">
                                                    <h6 className="name">David Jacson</h6>
                                                    <span className="reply-time">November 20, 2018 at 8:31 pm</span>
                                                    <a href="/#" className="reply">reply</a>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="single-comment-wrap">
                                        <div className="content">
                                            <h6 className="name">Jena Lambert</h6>
                                            <span className="reply-time">November 20, 2018 at 8:31 pm</span>
                                            <a href="/#" className="reply">reply</a>
                                            <p>It has survived not only five centurie, but also leap into electronic typesetting, remaining sei essentially simplu dolor amet dummy text. </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="comment-form-wrap">
                            <h3 className="block-title">Leave a reply</h3>
                            <form className="cmn-form comment-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="frm-group">
                                            <input type="text" name="name" id="name" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="frm-group">
                                            <input type="email" name="email" id="email" placeholder="Enter email address" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="frm-group">
                                            <textarea name="message" id="message" placeholder="Write a Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="frm-group">
                                            <button type="submit" className="cmn-btn">Post Comment</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar">
                            <div className="widget search-widegt">
                                <h4 className="widget-title">search</h4>
                                <div className="widget-body">
                                    <form className="widget-search-form">
                                        <input type="search" name="search" id="widget-search" placeholder="Search" />
                                        <button className="widget-search-btn"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div className="widget recent-post-widget">
                                <h4 className="widget-title">Recent Stories</h4>
                                <div className="widget-body">
                                    <ul className="small-post-list">
                                        <li className="small-post-item d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="assets/images/blog/s1.jpg" alt="post" />
                                            </div>
                                            <div className="content">
                                                <h6 className="post-title"><a href="/#">Interesting Facts I Bet You Never Knew About Lottery</a></h6>
                                            </div>
                                        </li>
                                        <li className="small-post-item d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="assets/images/blog/s2.jpg" alt="post" />
                                            </div>
                                            <div className="content">
                                                <h6 className="post-title"><a href="/#">Sick And Tired Of Doing Lottery The Old Way?</a></h6>
                                            </div>
                                        </li>
                                        <li className="small-post-item d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="assets/images/blog/s3.jpg" alt="post" />
                                            </div>
                                            <div className="content">
                                                <h6 className="post-title"><a href="/#">Why Some People Almost Always Make/save Money.</a></h6>
                                            </div>
                                        </li>
                                        <li className="small-post-item d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="assets/images/blog/s4.jpg" alt="post" />
                                            </div>
                                            <div className="content">
                                                <h6 className="post-title"><a href="/#">Interesting Facts I Bet You Never Knew About Lottery</a></h6>
                                            </div>
                                        </li>
                                        <li className="small-post-item d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="assets/images/blog/s5.jpg" alt="post" />
                                            </div>
                                            <div className="content">
                                                <h6 className="post-title"><a href="/#">Sick And Tired Of Doing Lottery The Old Way?</a></h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget recent-post-widget">
                                <h4 className="widget-title">Trending</h4>
                                <div className="widget-body">
                                    <ul className="small-post-list">
                                        <li className="small-post-item d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="assets/images/blog/s1.jpg" alt="post" />
                                            </div>
                                            <div className="content">
                                                <h6 className="post-title"><a href="/#">Interesting Facts I Bet You Never Knew About Lottery</a></h6>
                                            </div>
                                        </li>
                                        <li className="small-post-item d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="assets/images/blog/s2.jpg" alt="post" />
                                            </div>
                                            <div className="content">
                                                <h6 className="post-title"><a href="/#">Sick And Tired Of Doing Lottery The Old Way?</a></h6>
                                            </div>
                                        </li>
                                        <li className="small-post-item d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="assets/images/blog/s3.jpg" alt="post" />
                                            </div>
                                            <div className="content">
                                                <h6 className="post-title"><a href="/#">Why Some People Almost Always Make/save Money.</a></h6>
                                            </div>
                                        </li>
                                        <li className="small-post-item d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="assets/images/blog/s4.jpg" alt="post" />
                                            </div>
                                            <div className="content">
                                                <h6 className="post-title"><a href="/#">Interesting Facts I Bet You Never Knew About Lottery</a></h6>
                                            </div>
                                        </li>
                                        <li className="small-post-item d-flex align-items-center">
                                            <div className="thumb">
                                                <img src="assets/images/blog/s5.jpg" alt="post" />
                                            </div>
                                            <div className="content">
                                                <h6 className="post-title"><a href="/#">Sick And Tired Of Doing Lottery The Old Way?</a></h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div >
)

export default BlogDetails;