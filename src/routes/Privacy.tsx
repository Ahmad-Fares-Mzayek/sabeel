import LegalPage, { LegalSection } from './LegalPage'

export default function Privacy() {
  return (
    <LegalPage eyebrow="Privacy" title="Privacy Policy" effective="2026-09-06">
      <p>
        This is a simple site. It exists to describe what Sabeel does and to
        let you get in touch. This page explains what information we collect
        when you do.
      </p>

      <LegalSection heading="What we collect">
        <p>
          We only collect what you type into the forms on this site: your
          name, your email address, and the details you choose to share in
          the message field. We do not use analytics, tracking pixels, or
          advertising cookies.
        </p>
      </LegalSection>

      <LegalSection heading="How we use it">
        <p>
          We use what you submit to reply to you and to decide whether we are
          a fit to work together. We do not sell it, share it with
          advertisers, or use it for marketing.
        </p>
      </LegalSection>

      <LegalSection heading="How it reaches us">
        <p>
          Form submissions are delivered to our inbox by Web3Forms. Your data
          transits their infrastructure so they can email us the contents.
          The imagery on this site is served from Unsplash, whose CDN may
          see your IP address when your browser fetches the images.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          Ask us and we will confirm what we hold about you, correct anything
          that is wrong, or delete it. Ask us to stop contacting you and we
          will.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Send questions about this policy through the form on the home page.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
