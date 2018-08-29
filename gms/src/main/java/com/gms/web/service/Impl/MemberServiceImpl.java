package com.gms.web.service.Impl;

import java.sql.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gms.web.domain.MemberDTO;
import com.gms.web.repository.MemberDAO;
import com.gms.web.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	@Autowired MemberDAO memberDAO;
	@Override
	public void add(MemberDTO p) {
		System.out.println("���óѾ�ɴϱ�");
		switch(p.getSsn2()){
			case "1":
				p.setGender("����");
				break;
			case "2":
				p.setGender("����");
				break;
		}
		String a = String.valueOf((2018-Integer.parseInt(p.getSsn().substring(0,2)))+1).substring(2,4);
		p.setAge(a);
		
		memberDAO.insert(p);
		
	}

	@Override
	public List<?> list(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<?> search(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MemberDTO retrieve(String p) {
		return memberDAO.selectOne(p);
	}

	@Override
	public int count(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void modify(MemberDTO p) {
		memberDAO.update(p);
		
	}

	@Override
	public void remove(MemberDTO p) {
		memberDAO.delete(p);
	}

	@Override
	public boolean login(MemberDTO p) {
		
		return memberDAO.login(p);
	}

}
