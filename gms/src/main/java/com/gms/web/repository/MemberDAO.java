package com.gms.web.repository;

import java.util.List;
import java.util.Map;

import com.gms.web.domain.MemberDTO;

public interface MemberDAO {
	public void insert(MemberDTO p);
	public List<?> selectList(Map<?,?> p);
	public List<?> selectSearch(Map<?,?> p);
	public MemberDTO selectOne(String p);
	public int count(Map<?,?> p);
	public void update(MemberDTO p);
	public void delete(MemberDTO p);
	public boolean login(MemberDTO p);
}
