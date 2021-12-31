import { cloneElement, ReactElement, SyntheticEvent, useState } from 'react';
import styles from './styles/home.module.scss';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Button,
  Paper,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  window?: () => Window;
  children: ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Home(): ReactElement {
  const [expanded, setExpanded] = useState<string | boolean>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <ElevationScroll>
        <AppBar color={'inherit'}>
          <div className={styles.header_container}>
            <img src="https://www.mofast.cloud/static/imgs/logo-new.png" alt="logo" />
            <div className={styles.header_link}>
              <Button
                variant="outlined"
                onClick={() => {
                  window.open('https://google.com', '_self');
                }}>
                登入
              </Button>
              <Button
                variant="contained"
                disableElevation
                onClick={() => {
                  window.open('https://google.com', '_self');
                }}>
                注册
              </Button>
            </div>
          </div>
        </AppBar>
      </ElevationScroll>
      <main>
        <section className={styles.title}>
          <h1>全球加速网络</h1>
          <span>
            针对大陆地区优化，为您提供安全可靠稳定的全球多地加速服务，突破互联网限制！
          </span>
        </section>
        <section className={styles.content}>
          <Paper elevation={2} className={styles.paper}>
            <h3>先用后付拒绝跑路</h3>
            <span>
              我们支持先用后付费，基于用户信用等级机制，可享受先使用后付费的套餐服务。新用户注册拥有默认的超支额度，直接开始使用吧！
            </span>
          </Paper>
          <Paper elevation={2} className={styles.paper}>
            <h3>用多少付多少</h3>
            <span>
              拒绝包月浪费，全平台按量付费，价格公开透明，不限时间不限设备不限速，搭配先用后付费，做到真正的用多少付多少！
            </span>
          </Paper>
          <Paper elevation={2} className={styles.paper}>
            <h3>全球热门地区加速</h3>
            <span>
              我们的节点分布在全球 10+
              国家或地区中，保持高速率加速标准，无限制的访问不同国家和地区内容。并且我们还在不断扩充中！
            </span>
          </Paper>
          <Paper elevation={2} className={styles.paper}>
            <h3>更好的线路</h3>
            <span>
              针对不同的价格区间和使用需求，我们有物美价廉的三网优化线路、CN2线路、高端的IPLC、IEPL等专线线路；满足不同用户的使用需求，提供更快更稳定的加速服务！
            </span>
          </Paper>
          <Paper elevation={2} className={styles.paper}>
            <h3>快速链接</h3>
            <span>
              得益于优秀的第三方软件开发者，我们的节点可在
              Windows、Android、iOS、macOS以及路由器上使用，特别感谢他们的付出。
            </span>
          </Paper>
          <Paper elevation={2} className={styles.paper}>
            <h3>加密无审查</h3>
            <span>
              您的数据都将以加密的方式传输。不仅是加密传输，还是高优先级的加密传输；无内容审查，您可以畅快且安全的使用全球的服务！
            </span>
          </Paper>
        </section>

        <section className={styles.problem}>
          <h4>常见问题</h4>
          <section>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  什么是先用后付和按量付款？
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  按量付费，随之您流量的使用，会按照节点流量单价/GB对您的账户余额进行扣款，如0.1元/GB，您每使用1GB，账户余额就会少0.1元。
                  <br />
                  由于白嫖欠费用户过多，造成成本增加，无法收回运营成本，因此在没有很好的解决方案之前，取消信用等级可欠费额度和先用后付费。
                  <br />
                  当您的余额 {'<='} 0 时，我们会停止对您的服务。
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header">
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  我们能在中国大陆地区使用吗？
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>可以，我们的线路专门为中国大陆优化。</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header">
                <Typography sx={{ width: '33%', flexShrink: 0 }}>稳定吗？</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  我们有众多线路节点以及高可用服务，还有专业的技术团队时刻关注支持，不用担心！
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header">
                <Typography sx={{ width: '33%', flexShrink: 0 }}>可以退款吗？</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  对于未消费的金额，您随时可以将您账户余额内的金额提现出去。当然由于服务成本考量，低于10元人民币不支持提现，您可以凑够10元再提现，提现将在7个工作日内处理完成。
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header">
                <Typography sx={{ width: '33%', flexShrink: 0 }}>价格便宜吗？</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  首先，我们只提供按量付费套餐且支持先用后付，因此如果计算平均每GB的价格相对于一些便宜的包月肯定是相对贵一些的，但是实际上与大部分友商价格区别并不大，甚至比有些更低，大部分用户使用我们的服务实际上更省钱了，而且我们也提供不同的计费价格的节点。
                </Typography>
              </AccordionDetails>
            </Accordion>
          </section>
        </section>
        <footer>
          <a href="">服务条款</a> @2021 Mofast.Cloud. version 0.1.7 dev
        </footer>
      </main>
    </>
  );
}
