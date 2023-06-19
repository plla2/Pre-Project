package com.example.server.member.repository;

import com.example.server.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberJpaRepository extends JpaRepository<Member, Long> {
    @Query("select m from Member m where m.id = :memberId")
    Member findMemberByMemberId(long memberId);

    @Query("select m from Member m where m.email = :email")
    Member findMemberByMemberEmail(String email);
}
