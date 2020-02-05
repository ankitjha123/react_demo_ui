
### `Deployment steps:`

  pm2 list<br />
  pm2 stop REACT-ui<br />
  pm2 start ecosystem.config.js --env production<br />
  pm2 list<br />
  udo systemctl restart nginx<br />
  sudo systemctl status nginx<br />
