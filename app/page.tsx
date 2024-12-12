import { Button } from '@/components/shared/ui/button';
import Header from '@/components/shared/Header';
import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';
import LatestArticles from '@/components/blog/LatestArticles';
import { ComponentDemo } from 'demo/demo';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';

import {
  ChromeIcon,
  FigmaIcon,
  FramerIcon,
  GithubIcon,
  LayersIcon,
  LightbulbIcon,
  LineChartIcon,
  SparklesIcon,
  ThumbsUpIcon,
  ZapIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <LandingSocialProofBand invert={false} className="hidden md:flex">
        <LandingSocialProofBandItem>
          Fast, reliable, and secure
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem>
          Easy to use, easy to love
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem graphic="rating">
          99% customer satisfaction
        </LandingSocialProofBandItem>
      </LandingSocialProofBand>

      <Header className="mb-0 lg:mb-0" />

      <LandingPrimaryTextCtaSection
        title="Scaling content that converts technical audiences"
        description="We write and promote blog posts and video tutorials that speak directly to software developers, DevOps specialists, engineers, and other technical experts."
        textPosition="left"
        withBackground
        leadingComponent={<LandingProductHuntAward />}
      >
        <Button size="xl" asChild>
          <a href="/signup">Book a Call</a>
        </Button>

        <LandingDiscount
          discountValueText="30% off"
          discountDescriptionText="for the first 10 customers (2 left)"
        />

        <LandingSocialProof
          className="w-full mt-12"
          showRating
          numberOfUsers={99}
          suffixText="happy users"
          avatarItems={[
            {
              imageSrc: 'https://picsum.photos/id/64/100/100',
              name: 'John Doe',
            },
            {
              imageSrc: 'https://picsum.photos/id/65/100/100',
              name: 'Jane Doe',
            },
            {
              imageSrc: 'https://picsum.photos/id/669/100/100',
              name: 'Alice Doe',
            },
          ]}
        />
      </LandingPrimaryTextCtaSection>

      <LandingProductFeature
        title="Targeted Content Creation"
        descriptionComponent={
          <>
            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'Intuitive Interface',
                  description:
                    'Design and customize your app easily with our simple drag-and-drop interface.',
                },
                {
                  title: 'Seamless Integration',
                  description:
                    'Connect your app with other tools effortlessly for a smoother workflow.',
                },
                {
                  title: 'Smart Analytics',
                  description:
                    'Gain valuable insights into user behavior and trends with our advanced analytics tools.',
                },
              ]}
            />

            <Button asChild>
              <a href="/signup">Book a Call</a>
            </Button>

            <p className="text-sm">
              7 day free trial, no credit card required.
            </p>
          </>
        }
        imageSrc="/static/images/backdrop-19.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="none"
      />

      <LandingProductFeature
        title="Comprehensive Promotion Strategy"
        descriptionComponent={
          <>
            <p>
              Every piece of content we create is paired with a strategic
              promotion plan. We ensure that your materials not only reach your
              target audience but also engage them through the right channels,
              maximizing visibility and impact.
            </p>

            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'Rock-Solid Security',
                  description:
                    'Rest assured, your data is safe with our top-notch security measures.',
                },
                {
                  title: 'Automatic Updates',
                  description:
                    'Never miss out on the latest features - our app updates itself automatically!',
                },
                {
                  title: 'Scalability on Demand',
                  description:
                    'Grow your app along with your business needs, effortlessly expanding to meet demand.',
                },
              ]}
            />

            <Button asChild>
              <a href="/signup">Book a Call</a>
            </Button>

            <p className="text-sm">Get started with our free tier.</p>
          </>
        }
        imageSrc="/static/images/backdrop-20.webp"
        imageAlt="Screenshot of the product"
        imagePosition="right"
        imagePerspective="none"
        withBackground
        withBackgroundGlow
        variant="secondary"
        backgroundGlowVariant="secondary"
      />

      <LandingProductFeature
        title="In-Depth Technical Expertise"
        descriptionComponent={
          <>
            <p>
              Our team consists of writers with strong technical backgrounds who
              understand the nuances of software development and related fields.
              This ensures that the content we produce is not only accurate but
              also insightful and relevant.
            </p>

            <Button asChild>
              <a href="/signup">Book a Call</a>
            </Button>

            <p className="text-sm">First month is on us.</p>
          </>
        }
        imageSrc="/static/images/backdrop-5.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="none"
        variant="secondary"
      />

      <LandingBandSection
        title="4.9/5 stars"
        description="Our customers love our product."
        supportingComponent={
          <LandingSocialProof
            showRating
            numberOfUsers={99}
            avatarItems={[
              {
                imageSrc: 'https://picsum.photos/id/64/100/100',
                name: 'John Doe',
              },
              {
                imageSrc: 'https://picsum.photos/id/65/100/100',
                name: 'Jane Doe',
              },
              {
                imageSrc: 'https://picsum.photos/id/669/100/100',
                name: 'Alice Doe',
              },
            ]}
          />
        }
      />

      <LandingProductFeature
        title="Engage Technical Minds"
        descriptionComponent={
          <>
            Crafting content that resonates with developers and engineers,
            driving real engagement.
            <Button asChild>
              <a href="/signup">Book a Call</a>
            </Button>
          </>
        }
        withBackground
        variant="secondary"
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Screenshot of the product"
        imagePosition="center"
        textPosition="center"
      />

      <LandingSaleCtaSection
        title="Transform Your Content Strategy"
        description="With Magenta Workflow, elevate your brand's authority within technical communities. Let us help you create content that stands out, drives action, and builds trust among your audience. Start today and watch your engagement soar!"
        ctaHref={'#'}
        ctaLabel={'Pre-order now'}
        withBackgroundGlow
      />

      <LandingTestimonialReadMoreWrapper size="md">
        <LandingTestimonialGrid
          title="Hear It from Our Users"
          description="Discover what our happy customers have to say about their experience with our AI app:"
          testimonialItems={[
            {
              name: 'John Smith',
              text: 'This app transformed our operations, boosting productivity like never before. Highly customizable and incredibly efficient!',
              handle: '@john_smith',
              imageSrc: 'https://picsum.photos/id/64/100/100',
            },
            {
              name: 'Emily Johnson',
              text: "Even with minimal tech knowledge, I could create my own app from scratch. It's empowering to have full control!",
              handle: '@emily_johnson',
              imageSrc: 'https://picsum.photos/id/65/100/100',
            },
            {
              name: 'David Rodriguez',
              text: 'Thanks to the analytics tools, we identified bottlenecks and saved significantly on costs. Truly impressive!',
              handle: '@david_rodriguez',
              imageSrc: 'https://picsum.photos/id/669/100/100',
              featured: true,
            },
            {
              name: 'Mandy',
              text: 'Excellent product!',
              handle: '@mandy',
              imageSrc: 'https://picsum.photos/id/829/100/100',
            },
            {
              name: 'Alex',
              text: 'Can easily recommend!',
              handle: '@alex',
              imageSrc: 'https://picsum.photos/100/100.webp?random=2',
            },
            {
              name: 'Sam',
              text: 'I am very happy with the results.',
              handle: '@sam',
              imageSrc: 'https://picsum.photos/100/100.webp?random=3',
            },
          ]}
          withBackgroundGlow
          withBackground
        />
      </LandingTestimonialReadMoreWrapper>

      <LandingFeatureList
        title="Awesome Features Await!"
        description="Explore the fantastic features of our AI app:"
        featureItems={[
          {
            title: 'Intuitive Interface',
            description:
              'Design and customize your app easily with our simple drag-and-drop interface.',
            icon: <LayersIcon />,
          },
          {
            title: 'Seamless Integration',
            description:
              'Connect your app with other tools effortlessly for a smoother workflow.',
            icon: <LineChartIcon />,
          },
          {
            title: 'Smart Analytics',
            description:
              'Gain valuable insights into user behavior and trends with our advanced analytics tools.',
            icon: <SparklesIcon />,
          },
          {
            title: 'Rock-Solid Security',
            description:
              'Rest assured, your data is safe with our top-notch security measures.',
            icon: <LightbulbIcon />,
          },
          {
            title: 'Automatic Updates',
            description:
              'Never miss out on the latest features - our app updates itself automatically!',
            icon: <ZapIcon />,
          },
          {
            title: 'Scalability on Demand',
            description:
              'Grow your app along with your business needs, effortlessly expanding to meet demand.',
            icon: <ThumbsUpIcon />,
          },
          {
            title: 'Intelligent Assistance',
            description:
              'Receive personalized recommendations and insights tailored to your workflow, helping you make informed decisions and work more efficiently.',
            icon: <ChromeIcon />,
          },
          {
            title: 'Seamless Collaboration',
            description:
              'Easily collaborate with team members and clients in real-time, fostering productivity and enhancing communication across projects.',
            icon: <FigmaIcon />,
          },
          {
            title: 'Advanced Customization',
            description:
              'Tailor your app to fit your unique requirements with extensive customization options, ensuring it aligns perfectly with your business objectives.',
            icon: <FramerIcon />,
          },
        ]}
      />

      <LandingFaqCollapsibleSection
        title="Frequently Asked Questions"
        description="Find answers to common questions about our content services tailored for technical audiences."
        faqItems={[
          {
            question:
              'What type of content does Magenta Workflow specialize in?',
            answer:
              'At Magenta Workflow, we create engaging blog posts and video tutorials designed specifically for software developers, DevOps specialists, engineers, and other technical professionals.',
          },
          {
            question:
              'How do you ensure the content resonates with a technical audience?',
            answer:
              'Our team comprises experienced writers with technical backgrounds who understand the nuances and challenges faced by technical professionals. We focus on delivering detailed, relevant, and practical content that speaks directly to their needs.',
          },
          {
            question:
              'Can I expect SEO-friendly content from Magenta Workflow?',
            answer:
              'Absolutely! Our content is crafted with SEO best practices in mind, ensuring higher visibility and engagement while maintaining the technical accuracy and depth crucial for your audience.',
          },
        ]}
        withBackground
      />

      <section className="container-wide mt-12">
        <LatestArticles />
      </section>

      <div className="w-full flex flex-col items-center gap-8 md:gap-16">
        <section className="container-ultrawide">
          <ComponentDemo />
        </section>
      </div>
    </div>
  );
}
