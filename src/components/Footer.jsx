import { footerLinks, contactInfo } from '../data/content'

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-ink/65 hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-mint pt-14 pb-8">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Terms & Policies" links={footerLinks.terms} />
          <FooterColumn title="Follow Us" links={footerLinks.follow} />

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-sm text-ink/65 space-y-2.5 leading-relaxed">
              <p>
                {contactInfo.address[0]}
                <br />
                {contactInfo.address[1]}
              </p>
              <p>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-ink transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-ink transition-colors">
                  {contactInfo.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <hr className="mt-12 border-ink/15" />

        <p className="mt-6 text-center text-xs text-ink/60">
          &copy;{new Date().getFullYear()} Elementum. All rights reserved
        </p>
      </div>
    </footer>
  )
}
