import AboutSection from '@/components/aboutSection'
import ContactSection from '@/components/contactSection'
import HeroSection from '@/components/heroSection'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#282C33]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  )
}
/* <Grid
      container
      component="main"
      className="min-h-screen bg-[#282C33]"
      justifyContent="center"
      alignItems="center"
    >
      <Navbar />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} md={4}>
          <Avatar
            alt="Your Name"
            src="DSC_1098.JPEG" // Replace with the path to your circular image
            sx={{ width: 300, height: 300, marginLeft: 35 }} // Adjust the size and spacing as needed
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="ml-12" style={{ width: '50%' }}>
            <Typography
              variant="h4"
              component="h1"
              className="text-epilogue text-white"
            >
              <span className="text-epilogue text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                {t('hi')}
              </span>{' '}
              {t('itsme')}
            </Typography>
            <Typography
              variant="body1"
              color="white"
              className="text-epilogue text-[20px]"
            >
              {t('description')}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid> */
