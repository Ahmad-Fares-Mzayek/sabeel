import LegalPage, { LegalSection } from './LegalPage'

export default function Terms() {
  return (
    <LegalPage eyebrow="Terms" title="Terms of Use" effective="2026-09-06">
      <p>
        These terms cover your use of the Sabeel website. By using the site
        you agree to them. If you do not, please do not use the site.
      </p>

      <LegalSection heading="Using the site">
        <p>
          The site is here for you to read, share, and get in touch. You may
          not attempt to break into our systems, scrape or mirror the site
          without permission, or interfere with how it works for others.
        </p>
      </LegalSection>

      <LegalSection heading="Applications and enquiries">
        <p>
          Sending us a message through this site does not create any binding
          relationship between you and Sabeel. Nothing on the site is an
          offer or solicitation of investment. Any engagement that follows is
          governed by a separate written agreement.
        </p>
      </LegalSection>

      <LegalSection heading="Content and credits">
        <p>
          The text, layout, and design of this site belong to Sabeel. You may
          quote short excerpts with attribution but you may not republish it
          in whole. Photographs are used under the licences granted by their
          photographers on Unsplash; credit is kept in the source code.
        </p>
      </LegalSection>

      <LegalSection heading="No warranties">
        <p>
          The site is provided as is. We do our best to keep it accurate and
          available, but we do not guarantee that it will be uninterrupted or
          error-free, and we accept no liability for indirect or
          consequential loss arising from your use of it.
        </p>
      </LegalSection>

      <LegalSection heading="Changes">
        <p>
          We may update these terms from time to time. The effective date at
          the top of this page reflects the latest revision.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Send questions about these terms through the form on the home page.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
