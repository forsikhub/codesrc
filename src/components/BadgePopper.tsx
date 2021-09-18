import React,{useEffect, useState} from 'react'
import Box from '@material-ui/core/Box';
import Popper from '@material-ui/core/Popper';
import { Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PostService from '../API/PostService';

export default function BadgePopper() {
    const [newsArr, setNewsArr]=useState([])
    const[newsId, setNewsId] = useState(0)
    useEffect(() => {
        if (newsId < 100){
            setTimeout(() => {
                setNewsId(prev=>prev+1)
            }, 2000);
        }
        fetchPosts() 
    }, [newsId]);

        async function fetchPosts(){
            const response = await PostService.getAll(newsId)
            if (newsArr.length < 5){
                setNewsArr(prev=>prev.concat(response.data))
            }
            else{
                setNewsArr(newsArr.slice(1).concat(response.data))
            }  
        }


  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <Badge badgeContent={newsArr.length} color="secondary">
            <NotificationsIcon color="inherit" onClick={handleClick} />
      </Badge>
      
      <Popper id={id} open={open} anchorEl={anchorEl}>
        {newsArr.map((post)=>
        <Box key={post.id}sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
        {post.id} {post.body} 
        </Box>)}
      </Popper>
    </div>
  );
}