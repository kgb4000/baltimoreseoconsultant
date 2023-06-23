import Link from 'next/link'
import Button from '@/components/Button'

export default function Home() {
  return (
    <main>
      <header>
        <div className="container">
          <p>Kester Browne</p>
          <p>Baltimore SEO Consultant</p>
          <nav>
            <ul className="nav">
              <li>SEO Services</li>
              <li>
                <Link href="#me">Why Me</Link>
              </li>
              <li>
                <Link href="#faq">FAQs</Link>
              </li>
              <li>
                <Link href="/">Book a Consultation!</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <h1 className="title">Hello, I’m the #1 Baltimore SEO Consultant</h1>
          <div className="subtext">
            <p>
              Need a Baltimore SEO consultant that can actually get you more
              traffic, leads, and sales from Google?
            </p>
            <Button>Book Your SEO Consultation!</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="title">
            5 Reasons You Need An SEO Consultant in Baltimore, MD
          </h2>
          <div>
            <h3>#1. Your Competitors are Already Doing SEO</h3>
          </div>
          <div>
            <h3>#2. Long-term benefits</h3>
          </div>
          <div>
            <h3>#3. You Gain a Competitive advantage</h3>
          </div>
          <div>
            <h3>#4. More People Will See Your Business on Google</h3>
          </div>
          <div>
            <h3>#5. It’s More Cost-effective than Social Media</h3>
          </div>
          <Button>Book SEO Strategy Call Now!</Button>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="title">Our Baltimore SEO Services</h2>
          <div>
            <h3>1-on-1 SEO Consulting</h3>
          </div>
          <div>
            <h3>Baltimore Local SEO</h3>
          </div>
          <div>
            <h3>Keyword Research Service</h3>
          </div>
          <div>
            <h3>SEO Audit Services</h3>
          </div>
          <div>
            <h3>Link Building Services</h3>
          </div>
          <div>
            <h3>National SEO Services</h3>
          </div>
          <Button>Get SEO Help Today</Button>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="title">
            With All Those Other Baltimore SEO Companies, Why Should You Work
            With Me?
          </h2>
          <div>
            <h3>I Focus on the Results</h3>
          </div>
          <div>
            <h3>I Build Custom SEO Campaigns</h3>
          </div>
          <div>
            <h3>I'm a Real Baltimore SEO Expert</h3>
          </div>
          <div>
            <h3>I am 100% Transparent</h3>
          </div>
          <Button>Book Your Strategy Call Today!</Button>
        </div>
      </section>
      <section id="faq">
        <div className="small-container">
          <h2>Frequently Asked Questions about Baltimore SEO</h2>
          <div>
            <h3>How much does SEO cost for a business in Baltimore?</h3>
          </div>
          <div>
            <h3>Should you work with a large digital agency?</h3>
          </div>
          <div>
            <h3>How long does it take to rank my website?</h3>
          </div>
        </div>
      </section>
      <section id="me">
        <div className="small-container">
          <h2 className="title">
            Meet the Baltimore SEO Expert Ready to Get You More Traffic and Earn
            More Money for Your Business
          </h2>
          <img src="/images/kgb4000-circle.jpg" className="avatar" />
          <div>
            <p>
              Hello, I’m Kester, and I have been doing search engine
              optimization in Maryland for over 5 years. I have ranked
              businesses on the first page and top 5 positions in some
              competitive industries, and I know I can help your business.
            </p>
            <p>
              My expertise, long-standing commitment to learning, and
              results-oriented approach set me apart and make me the optimal
              choice for clients who want to grow their digital presence. I
              believe in transparency, constant communication, and educating my
              clients about the processes and techniques, empowering them to
              make informed decisions.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="title">Book Your Strategy Call</h2>
          <p className="subtext">
            I'll analyze your website and give you feedback to drive better SEO
            results (fast). Book your SEO consulting now:
          </p>
          <div className="center">
            <Button>Book Your SEO Consultation Today</Button>
          </div>
        </div>
      </section>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} Bowie SEO</p>
      </footer>
    </main>
  )
}
