import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import AuthHeaderComponent from '../../components/AuthHeader';
import style from '../pricingStyles.module.css';

import recordLabelSignup from "./../../assets/images/recordLabelSignup.jpg"
import artistSignup from "./../../assets/images/artistSignup.jpg"


  
function ArtistDetails() {
    const navigate = useNavigate();
    

    return (
        <>
            <Box sx={{bgcolor: "#000", color: "#fff", minHeight: "100vh", position: "relative", overflow: "hidden"}}>
                <AuthHeaderComponent />

                <Box onClick={() => navigate("/auth/artistDetails")}
                    sx={{
                        width: '100%',
                        height: '221px',
                        backgroundImage: `url(${artistSignup})`, // Replace with your image URL
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        top: "-47px",
                        cursor: 'pointer',
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(180.1deg, rgba(0, 0, 0, 0) 0.08%, #000000 109.84%)',
                        }}
                    />
                    <Typography sx={{
                        fontWeight: "700",
                        fontSize: "34px",
                        lineHeight: "40px",
                        letterSpacing: "-0.13px",
                        position: "absolute",
                        bottom: 80,
                        left: 130
                    }}>
                        Artist
                    </Typography>
                </Box>

                <>
                    <Box sx={{display: { xs: 'none', md: 'block' }}}>
                        <div className={style.topGradient}></div>
                        <div className={style.leftGradient}></div>
                        <div className={style.leftBottomGradient}></div>
                        <div className={style.rightTopGradient}></div>
                        <div className={style.rightBottom2Gradient}></div>
                        <div className={style.btnCenteredGradient}></div>
                        <div className={style.leftBottom2Gradient}></div>
                    </Box>

                    <Box sx={{display: { xs: 'block', md: 'none' }}}>
                        <div className={style.mobileLeftGradient}></div>
                        <div className={style.mobileRightGradient}></div>
                        <div className={style.mobileCenteredGradient}></div>
                    </Box>
                </>


                <Container sx={{pt: 7, pb: 10}}>
                    <Box sx={{
                        textAlign: "center",
                        my: 5
                    }}>
                        <Typography sx={{
                            fontWeight: "900",
                            fontSize: {xs: 35, md: 60},
                            lineHeight: {xs: "49.28px", md: "82.28px"},
                            letterSpacing: {xs: "-0.9px", md: "-1.5px"}
                        }}>
                            Get access to SoundMuve
                        </Typography>

                        <Typography>
                            Tell us who you are
                        </Typography>
                    </Box>


                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap"
                    }}>
                        <Box onClick={() => navigate("/auth/artistDetails")}
                            sx={{
                                width: '362.89px',
                                height: '296.99px',
                                backgroundImage: `url(${artistSignup})`, // Replace with your image URL
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                cursor: 'pointer',
                                borderRadius: "13.69px",
                                border: "1px solid #fff",
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(180.1deg, rgba(0, 0, 0, 0) 0.08%, #000000 109.84%)',
                                }}
                            />
                            <Typography sx={{
                                fontWeight: "700",
                                fontSize: "34px",
                                lineHeight: "40px",
                                letterSpacing: "-0.13px",
                                position: "absolute",
                                bottom: 80,
                                left: 130
                            }}>
                                Artist
                            </Typography>
                        </Box>

                        <Box onClick={() => navigate("/auth/recordLabelDetails")}
                            sx={{
                                width: '362.89px',
                                height: '296.99px',
                                backgroundImage: `url(${recordLabelSignup})`, // Replace with your image URL
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                cursor: 'pointer',
                                borderRadius: "13.69px",
                                border: "1px solid #fff",
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(180.1deg, rgba(0, 0, 0, 0) 0.08%, #000000 109.84%)',
                                }}
                            />
                            
                            <Typography sx={{
                                fontWeight: "700",
                                fontSize: "34px",
                                lineHeight: "40px",
                                letterSpacing: "-0.13px",
                                position: "absolute",
                                bottom: 80,
                                left: 80
                            }}>
                                Record Label
                            </Typography>
                        </Box>
                    </Box>

                    
                    <Box sx={{my: 7}}>
                        <Typography sx={{
                            fontSize: {xs: 14, md: "15.38px"},
                            fontWeight: "400",
                            lineHeight: "38.44px",
                            letterSpacing: "-0.12px",
                            textAlign: "center"
                        }}>
                            Already part of a team?
                            <Link to='/auth/login' style={{
                                fontWeight: "bold",
                                color: "#8638E5",
                            }}> Login </Link>
                        </Typography>
                    </Box>

                </Container>
            </Box>
        </>
    )
}

export default ArtistDetails;
