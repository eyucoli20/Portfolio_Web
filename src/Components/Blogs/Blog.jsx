import React from 'react';
import './Blog.css'; // optional for styles

function Blog() {
    const sampleImages = [
        'https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg', // AI abstract
        'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',   // network abstract
        'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',   // cybersecurity
        'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',  // automation
        'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg',  // data center
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',// digital abstract
    ];

    const blogs = sampleImages.map((imgUrl, i) => ({
        title: `Blog Post ${i + 1}`,
        desc: `Insights into topic #${i + 1} — innovations, tutorials, ideas.`,
        img: imgUrl,
    }));

    return (
        <section id="blogs" className="py-5 bg-light">
        <div className="container">
            <h2 className="mb-4 text-primary">Blogs</h2>
            <div className="row g-4" id="blog-grid">
            {blogs.map((blog, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-3">
                <div
                    className="tile"
                    style={{
                    backgroundImage: `url(${blog.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '220px',
                    position: 'relative',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    }}
                >
                    <div className="tile-overlay">
                    <h5 className="fw-bold mb-1">{blog.title}</h5>
                    <p className="small mb-0">{blog.desc}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}

export default Blog;