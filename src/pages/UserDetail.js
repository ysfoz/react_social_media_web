import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import {fetchData} from '../helper/FetchData'
import { Container, Typography} from '@material-ui/core'


import { makeStyles } from "@material-ui/core/styles";
import MediaCard from "../components/MediaCard";

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "10rem",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function UserDetail() {
    const [userDetail,setUserDetail] = useState();
    const { id } = useParams();
    const mainStyles =stylesFunc()
    useEffect(()=> {
        fetchData(`/user/${id}`)
        .then((res)=> setUserDetail(res))
        .catch((err) => console.log(err))
        .finally()
    },[])

    return (
    <Container className = {mainStyles.wrapper}>
    <img src={userDetail?.picture} alt = 'user' />
    <Typography variant='h4'>{userDetail?.firstName}</Typography>
    <Typography variant='h4'>{userDetail?.lastName}</Typography>
    <Typography variant='h4'>{userDetail?.registerDate}</Typography>
    <Typography variant='h4'>{userDetail?.phone}</Typography>
    
    </Container>
    )
}
