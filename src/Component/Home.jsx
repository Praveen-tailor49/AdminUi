import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import TableCom from './TableCom';

export default function Home() {
    const [spacing] = React.useState(2);

    return (
        <>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12} alignItems="center">
                    <Grid container
                        spacing={spacing}
                        rowSpacing={1}
                        // direction="column"
                        // alignItems="flex-start"
                        justifyContent="center"
                        style={{ marginTop: '50px' }}
                    >
                        <Grid item >
                            <Paper
                                sx={{
                                    height: 140,
                                    width: 300,
                                    backgroundColor: '#68ad00',
                                    marginTop: '30px'
                                    // backgroundColor: (theme) =>
                                    //     theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={8} sx={{ color: 'white' }}>
                                        <div>
                                            <h2 style={{ height: '16px' }}>83</h2>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div style={{
                                            backgroundColor: 'white',
                                            height: '50px',
                                            borderRadius: '50%',
                                            width: '50px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginTop: '20px'
                                        }}>
                                            <TextSnippetIcon sx={{ color: '#91b650' }} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={8}>
                                        {/* <div>Register User</div> */}
                                        <div>
                                            <h4 style={{ marginTop: 0, color: 'white' }}>Register User</h4>
                                        </div>
                                    </Grid>
                                </Grid>

                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper
                                sx={{
                                    height: 140,
                                    width: 300,
                                    backgroundColor: "#fd8213",
                                    marginTop: '30px'
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={8} sx={{ color: 'white' }}>
                                        <div>
                                            <h2 style={{ height: '16px' }}>83</h2>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div style={{
                                            backgroundColor: 'white',
                                            height: '50px',
                                            borderRadius: '50%',
                                            width: '50px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginTop: '20px'
                                        }}>
                                            <RemoveRedEyeIcon sx={{ color: '#fd8213' }} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={8}>
                                        {/* <div>Register User</div> */}
                                        <div>
                                            <h4 style={{ marginTop: 0, color: 'white' }}>Register User</h4>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper
                                sx={{
                                    height: 140,
                                    width: 300,
                                    backgroundColor: "#337bb7",
                                    marginTop: '30px'
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={8} sx={{ color: 'white' }}>
                                        <div>
                                            <h2 style={{ height: '16px' }}>83</h2>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div style={{
                                            backgroundColor: 'white',
                                            height: '50px',
                                            borderRadius: '50%',
                                            width: '50px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginTop: '20px'
                                        }}>
                                            <LocalPostOfficeIcon sx={{ color: '#337bb7' }} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={8}>
                                        {/* <div>Register User</div> */}
                                        <div>
                                            <h4 style={{ marginTop: 0, color: 'white' }}>Register User</h4>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid >
            </Grid >

            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12} alignItems="center">
                    <Grid container
                        spacing={spacing}
                        rowSpacing={1}
                        // direction="column"
                        // alignItems="flex-start"
                        justifyContent="center"
                        style={{ marginTop: '10px' }}
                    >
                        <Grid item sx={{width:'70%'}} >
                            {/* <Paper
                                sx={{
                                    height: 240,
                                    width: 900,
                                    backgroundColor: '#fff',
                                }}
                            > */}
                                <TableCom/>
                            {/* </Paper> */}
                        </Grid>
                    </Grid>
                </Grid >
            </Grid >
        </>
    );
}
