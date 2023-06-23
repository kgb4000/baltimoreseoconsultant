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
              <li>
                <Link href="#services">SEO Services</Link>
              </li>
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
            <p>If you're serious, let's have a Zoom call!</p>
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
            <h3>#2. Get Leads Allday Everyday</h3>
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
      <section id="services">
        <div className="container">
          <h2 className="title">Our Baltimore SEO Services</h2>
          <p className="subtext">
            Here are the search engine optimization services I give to Baltimore
            businesses to succeed online
          </p>
          <div>
            <h3>1-on-1 SEO Consulting</h3>
            <p>
              Need some help with search engine optimization to get real
              results? Work with a pro. Work with a top Baltimore SEO specialist
              one-on-one and let's get you to the top of the search results.
            </p>
            <p>
              We'll go through your website together on a Zoom call and identify
              things to get you to the top of the search results.
            </p>
          </div>
          <div>
            <h3>Baltimore Local SEO Service</h3>
            <p>Show up when it matters th most.</p>
            <p>
              My Baltimore SEO company will turn your website into a lead
              generating machine. You can appear in the map pack, and the
              organic search, occupying more online real estate than your
              competitors.
            </p>
            <p>
              It doesn't matter if you operate in Baltimore City or Baltimore
              County.
            </p>
            <p>
              Whether you're a solo baltimore business owner or you have one
              hundred people working in your company.
            </p>
            <p>
              You can dominate the B'more local search results in your industry
              and attract the best leads and customers.
            </p>
          </div>
          <div>
            <h3>Keyword Research Service</h3>
            <p>
              Finding the best and most profitable keywords for your business
              takes time and years of experience. I find the best keywords that
              attract the best clients and customers.
            </p>
            <p>Those that spend money with your business.</p>
          </div>
          <div>
            <h3>SEO Audit Service</h3>
            <p>
              It's been years and you haven't figured out why your business
              doesn't appear in the search results when you search for your
              services.
            </p>
            <p>I can help you fix that.</p>
            <p>
              Find out what's stopping your website and your business from
              showing up in the search results. Get an SEO audit and discover
              what's holding your back, and how to fix so that you can get seen
              online.
            </p>
          </div>
          <div>
            <h3>Link Building Service</h3>
            <p>
              Does your website have backlinks? Do you know what there are? If
              you don't have backlinks, chances are you won't rank high in
              Google.
            </p>
            <p>
              Backlinks are the trust factor that Google uses to rank you site.
            </p>
            <p>
              I'll find and get you the best backlinks that help your business
              gain trust with my safe link building methods.
            </p>
          </div>
          <div>
            <h3>National SEO Service</h3>
          </div>
          <Button>Get SEO Help Today</Button>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="title">
            With All The Other Baltimore SEO Companies, Why Should You Work With
            Me?
          </h2>
          <div>
            <h3>I Focus on the Results</h3>
            <p>
              Getting traffic to your website is nice, but are you making money.
            </p>
            <p>
              Are you getting more phone calls and more leads? Are you getting
              more sales? Are you getting a return on your SEO investment.
            </p>
            <p>That's what I care about.</p>
            <p>Everything else doesn't really matter.</p>
          </div>
          <div>
            <h3>I Build Custom SEO Campaigns</h3>
          </div>
          <div>
            <h3>I'm a Real Baltimore SEO Expert</h3>
          </div>
          <div>
            <h3>I am 100% Transparent</h3>
            <p>
              You will know everything I'm doing. You can call or email me with
              any questions or concerns.
            </p>
            <p>
              If you want to learn how to do SEO yourself, I'm down to teach you
              my process.
            </p>
          </div>
          <div>
            <h3>I Never Work With Your Competition</h3>
            <p>
              Some SEO companies will work with anybody. Even your competiton in
              the same city.
            </p>
            <p>That's not right.</p>
            <p>When we work together, I only work for you in your industry in your city.</p>
            <p>I'll never try to help the competiton, and I have rules and scuples I live by.</p>
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
          <img
            src="/images/kgb4000-circle.jpg"
            className="avatar"
            alt="Baltimore SEO Consultant - Kester Browne."
            title="Baltimore SEO Consultant - Kester Browne."
            loading="lazy"
          />
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
