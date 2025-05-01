import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  acitivity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
};

function ActivityDetail({ acitivity, cancelSelectActivity, openForm }: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${acitivity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{acitivity.title}</Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {acitivity.date}
        </Typography>
        <Typography variant="body1">{acitivity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => openForm(acitivity.id)} color="primary">
          Edit
        </Button>
        <Button onClick={cancelSelectActivity} color="inherit">
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}

export default ActivityDetail;
