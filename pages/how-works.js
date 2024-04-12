/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";


function BlogSingle() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero banner-head-image" style={{ background: 'url(assets/imgs/page/workflow/workflow-image.png)' }}>
                            <div className="container">
                                <div className="text-center">
                                    <h1 className="text-heading-1 color-white mt-30">PESKAS workflow</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50 mb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2" />
                                <div className="col-lg-8">
                                    <div className="single-detail mt-50">
                                        <p />
                                        <h3>1. Discovering fisheries</h3>
                                        <p>At the heart of effective fishery management lies a deep understanding of its starting point. "Discovering Fisheries" is where we initiate our dialogue with the sea. This critical first step in the Peskas approach involves casting our nets wide—not for fish, but for data.</p>
                                        <h4>Comprehend to Conserve</h4>
                                        <p><strong>Intuitive Data Collection:</strong> Leveraging user-friendly digital tools, we meticulously chart the vital signs of marine life. Our tools are designed for precision and ease, enabling fishers and researchers to record data that reflects the true state of our fisheries.</p>
                                        <p><strong>Strategic Engagement:</strong> By aligning with the goals and needs of local stakeholders, we ensure the data serves a dual purpose: to empower local economies and to pave the way for conservation.</p>
                                        <p><strong>Drafting the Blueprint:</strong> This phase is not just about data collection; it's about crafting a narrative that guides the Peskas platform's development to accommodate the unique dynamics of each fishery.</p>
                                        <p>In "Discovering Fisheries," we not only aim to understand the fishery but also to start drafting Peskas around the wealth of knowledge that the seas offer us. It's about shaping a tool that resonates with the rhythm of the waves and the tales of those who navigate them.</p>                                        <p />
                                        <div className="box-quote">
                                            <div className="text-quote">Blandit consequat feugiat sed dapibus lorem diam nibh venenatis sodales pulvinar augue adipiscing turpis nulla sit tincidunt non lacus sit amet et white dreamy dramatically place.</div>
                                            <div className="box-user">
                                                <div className="img-user"><img src="/assets/imgs/page/blog/single/user-4.png" alt="Agon" /></div><span className="text-heading-5 color-white">Ronald Richards</span>
                                            </div>
                                        </div>
                                        <p />
                                        <h3>2. Simplifying Data</h3>
                                        <p> In the 'Simplifying Data' phase of Peskas, we tackle the intricate challenge of making complex fisheries data accessible and usable. This step is crucial for transforming collected data into a powerhouse of insights:</p>
                                        <p><strong>Standardization:</strong> We convert diverse data into a common format, aligning with global data standards for seamless integration.</p>
                                        <p><strong>Intuitiveness:</strong> By reorganizing data into more approachable layouts, we enhance user experience, enabling stakeholders to navigate and understand information with ease.</p>
                                        <p><strong>Ontological Alignment:</strong> Our processes ensure that data structures are in sync with established ontologies, which is essential for the interoperability and reliability of data.</p>
                                        <p> The end goal of this phase is not just to simplify data, but to craft a foundation that is both informative and actionable, setting the stage for effective decision-making in fisheries management.</p>
                                        <div className="row mt-45 mb-30">
                                            <div className="col-lg-6"><img className="img-responsive" src="assets/imgs/page/blog/single/img-3.png" alt="Agon" /></div>
                                            <div className="col-lg-6"><img className="img-responsive mb-20" src="assets/imgs/page/blog/single/img-4.png" alt="Agon" /><img className="img-responsive" src="assets/imgs/page/blog/single/img-5.png" alt="Agon" /></div>
                                            <div className="caption-img mt-10 text-center color-gray-400">furniture in your house</div>
                                        </div>
                                        <p />
                                        <h3 className="text-heading-3">Use your headings</h3>
                                        <p>Thirty there and time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p>
                                        <div className="border-bottom mt-50 mb-50" />
                                        <div>
                                            <Link href="/blog-1" legacyBehavior><a className="btn btn-tag mr-10">Nature</a></Link>
                                            <Link href="/blog-2" legacyBehavior><a className="btn btn-tag mr-10">Beauty</a></Link>
                                            <Link href="/blog-1" legacyBehavior><a className="btn btn-tag mr-10">Travel tips</a></Link>
                                            <Link href="/blog-2" legacyBehavior><a className="btn btn-tag">Houes</a></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>

        </>
    )
}

export default BlogSingle;