import React, { useEffect, useState } from 'react';
import useLgtmRepo from '../../hooks/useLgtmRepo';
import { Lgtm } from '../../types/lgtm.type';
import LgtmItem from './LgtmItem';

const LgtmList = () => {
  const { list } = useLgtmRepo();
  const [lgtmList, setLgtmList] = useState<Lgtm[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const lgtms = await list();
      setLgtmList(lgtms);
    };

    fetch();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {lgtmList.map((lgtm) => {
          return (
            <>
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
              <LgtmItem lgtm={lgtm} key={lgtm.id} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default LgtmList;
